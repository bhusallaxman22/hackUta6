export interface User {
    id: string;
    username: string;
    role: 'guest' | 'senator' | 'leader';
  }
  
  export interface Resolution {
    id: string;
    title: string;
    content: string;
    status: 'pending' | 'approved' | 'denied';
    votes: number;
    submittedBy: User;
  }
  