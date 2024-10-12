const Resolution = require('../models/Resolution');

exports.submitResolution = async (req, res) => {
    try {
        const resolution = new Resolution({
            ...req.body,
            submittedBy: req.user ? req.user._id : null
        });
        await resolution.save();
        res.status(201).send(resolution);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getResolutions = async (req, res) => {
    try {
        const resolutions = await Resolution.find().populate('submittedBy', 'username');
        res.send(resolutions);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.approveOrDenyResolution = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const resolution = await Resolution.findByIdAndUpdate(id, { status }, { new: true });
        if (!resolution) {
            return res.status(404).send();
        }
        res.send(resolution);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.voteOnResolution = async (req, res) => {
    try {
        const { id } = req.params;
        const resolution = await Resolution.findByIdAndUpdate(id, { $inc: { votes: 1 } }, { new: true });
        if (!resolution) {
            return res.status(404).send();
        }
        res.send(resolution);
    } catch (error) {
        res.status(400).send(error);
    }
};