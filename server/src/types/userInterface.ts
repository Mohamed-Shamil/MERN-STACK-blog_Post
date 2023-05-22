export interface UserInterface {
  _id?: string;
  firstName?: string;
  lastName?: string;
  password: string;
  phone?: string;
  email: string;
  following?: [];
  follower?: [];
}

export interface credentials {
  email: string;
  phone: string;
}


export interface CustomHeaders extends Headers {
  authorization?: string;
}
