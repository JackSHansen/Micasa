export interface City {
  id: number;
  zipcode: string;
  name: string;
}

export interface EstateImage {
  image: {
    filename: string;
    author: string | null;
    description: string | null;
  };
}

export interface Estate {
  id: number;
  address: string;
  price: number;
  numRooms: number;
  floorSpace: number;
  city?: {
    name: string;
    zipcode: string;
  };
  type?: {
    name: string;
  };
  energyLabel?: {
    name: string;
  };
  estateImages?: EstateImage[];
}

export interface Staff {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  image: string;
  email: string;
  phone: string;
}

export interface Review {
  id: number;
  subject?: string;
  comment: string;
  numStars: number;
  createdAt?: string;
  estate?: {
    id?: number;
    address: string;
    city?: {
      id?: number;
      zipcode: string;
      name: string;
    };
  };
  user?: {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
  };
}

export interface User {
  id: number;
  firstname: string;
  lastname?: string;
  email: string;
  isActive?: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user?: {
    id: number;
    email: string;
  };
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
}

export interface VerifyTokenResponse {
  userId: number;
}

export interface CreateUserPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  refreshToken?: string;
  isActive?: boolean;
}

export interface UpdateUserPayload {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  refreshToken?: string;
  isActive?: boolean;
}

export interface CreateReviewPayload {
  subject: string;
  comment: string;
  numStars: number;
  estateId: number;
}

export interface UpdateReviewPayload {
  subject?: string;
  comment?: string;
  numStars?: number;
  estateId?: number;
}

export interface DeleteResponse {
  message: string;
}
