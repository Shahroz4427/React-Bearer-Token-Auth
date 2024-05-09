
import ApiConstant from "../constants/ApiConstant";

export default class UserAuthService {

    static loginUser = (data) => {
        return new Promise((resolve, reject) => {
            ApiConstant.post('login', data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        reject(error.response.data);
                    } else {
                        reject("An unexpected error occurred.");
                    }
                });
        });
    }

    static registerUser = (data) => {
        return new Promise((resolve, reject) => {
            ApiConstant.post('register', data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        reject(error.response.data);
                    } else {
                        reject("An unexpected error occurred.");
                    }
                });
        });
    }

}
