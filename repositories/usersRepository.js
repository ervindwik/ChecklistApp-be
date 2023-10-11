const { Users } = require("../models");

class UsersRepository {


        // ------------------------- Register User  ------------------------- //
    
        static async createNewUser({username, password, email }) {
            const createdUser = Users.create({
                username,
                password,
                email
            });
    
            return createdUser;
        };
        
        // ------------------------- End Register User  ------------------------- //
    

    // ------------------------- Get User By Email  ------------------------- //

    static async getUserByEmail({ email }) {
        const getUserEmail = await Users.findOne({
            where: {
                email: email
            }
        });

        return getUserEmail;
    };

    // ------------------------- End Get User By Email  ------------------------- //

        // ------------------------- Get User By Username  ------------------------- //

        static async getUserByUsername({ username }) {
            const getUserUsername = await Users.findOne({
                where: {
                    username: username
                }
            });
    
            return getUserUsername;
        };
    
        // ------------------------- End Get User By Username  ------------------------- //
    


};

module.exports = UsersRepository;