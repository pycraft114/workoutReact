/**
 * Created by chanwoopark on 2017. 6. 21..
 */
export function submitLogin(id_field,password_field){
    return{
        type:"LOGIN_CLICKED",
        payload:[id_field,password_filed]
    }
}