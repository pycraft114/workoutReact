/**
 * Created by chanwoopark on 2017. 7. 26..
 */

export function setSideBarSettings(){
    const sidebarCollapse = document.querySelector("#sidebarCollapse");
    if(sidebarCollapse){
        const sidebar = document.querySelector("#sidebar");
        sidebarCollapse.addEventListener("click",function(){
            sidebar.className = sidebar.className ? '' : 'active';
        })
    }
}