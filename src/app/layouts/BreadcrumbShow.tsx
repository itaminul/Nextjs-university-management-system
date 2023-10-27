import { Breadcrumb } from "antd";
interface Items {
  title: string
}
function BreadcrumbShow(Items:any) {
  return(
    <>  
    
        <Breadcrumb style={{ margin: '10px 13px' }}>
          <Breadcrumb.Item>
            <a href="#">Home</a>
          </Breadcrumb.Item>        
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb> 
     
    </>
  )
}
export default BreadcrumbShow;