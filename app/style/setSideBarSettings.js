/**
 * Created by chanwoopark on 2017. 7. 26..
 */

export function setSideBarSettings(){
    const sidebarCollapse = document.querySelector("#sidebarCollapse");
    if(sidebarCollapse){
        const sidebar = document.querySelector("#sidebar");
        sidebarCollapse.addEventListener("click",function(evt){
            sidebar.className = sidebar.className ? '' : 'active';
            if(!evt.target.on){
                evt.target.on = "true";
                evt.target.className = evt.target.className+" active";
            }else{
                evt.target.on = "";
                evt.target.className = "btn btn-default btn-sm";
            }
        })
    }
}