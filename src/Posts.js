import posts from "./PostData"

function Posts() {
    let info = posts[0]
    return (
   
    <div className='Posts'>
            <div>{info.title.toUpperCase()}</div>
            <div> {info.date} </div>
            <div> {info.body} </div>
    </div>
    
    )
}
export default Posts