import './main.scss';

export default function Main(){
    return(
        <div className="main-container">
        <img className='bg-img' alt='green-img' src='https://images.pexels.com/photos/3876633/pexels-photo-3876633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        <div className="main">
        <h1 className="main-header">Minimalism is <strong>freedom</strong></h1>
        <p className="main-para">
        Minimalism is a tool that can help you to find freedom.
        Freedom from fear. Freedom from worry. Freedom to overcome.
        Freedom from guilt. Freedom from depression
        </p>
        <a className='link' href="google.com/minimalism" target="blank">Read more &gt;</a>
        </div>
        </div>
    )
}