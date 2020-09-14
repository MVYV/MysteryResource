export class UserModel {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public userName?: string,
        public email?: string,
        public city?: string,
        public country?: string,
        public dateOfBirth?: string,
        public gender?: string,
        public password?: string,
        public roles?: [
            {
                id?: number,
                name?: string,
            }
        ],
    ) { }
}
