exports.getHomePage = (req, res) => {
    res.send({
      title: 'Student Government Information',
      content: 'Welcome to the Student Government portal. Here you can find information about our activities and submit resolutions.'
    });
  };