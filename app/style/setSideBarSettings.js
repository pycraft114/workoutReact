/**
 * Created by chanwoopark on 2017. 7. 26..
 */

export function setSideBarSettings(){
    const sidebarCollapse = document.querySelector("#sidebarCollapse");
    if(sidebarCollapse){
        const sidebar = document.querySelector("#sidebar");
        sidebarCollapse.addEventListener("click",function(evt){
            sidebar.className = sidebar.className ? '' : 'active';
            if(!sidebarCollapse.active){
                sidebarCollapse.active = "true";
                sidebarCollapse.className = evt.target.className+" active";
            }else{
                sidebarCollapse.active = "";
                sidebarCollapse.className = "btn btn-default btn-sm";
            }
        })
    }
}