/**
 * Created by chanwoopark on 2017. 7. 1..
 */
//initial state는 제일 처음 이 reducer 함수가 invoke될때 첫번째 인자로 아무것도 전해지지 않고있기때문에
//default값을 설정, 그이후 state값이 assign된다면 이 reducer의 첫번째 인자는(state) 는 assign된 state를 사용하기때문에
//한번바뀌고 난이후로 state의 값이 undefined으로 설정해주지 않는경우 절대로 이후에 default값을 가질 일은 없을것.

//정확하게 reducer함수가 invoke될때 인자로 무엇이 전달되는가?
import { KGREP_SENT, KGREP_FETCHED, VOL_DELETE_CLICKED } from 'actions/actionTypes';


export default function(state = [],action){
    switch(action.type){
        case KGREP_SENT:
            return action.kgRepList;

        case KGREP_FETCHED:
            return action.kgRepList;

        case VOL_DELETE_CLICKED:
            return action.kgRepList;
    }

    return state;
}