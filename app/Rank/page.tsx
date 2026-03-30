import './rank.css';
import Menubar from '../component/menubar';

export default function Rankpage() {
  return (
    <div className="layout-rankpage">
        <Menubar />
        <div className='title-top-ranking'>
            <h3>Ranking</h3>
        </div>
        <div className='box-content-rankpage'>
            <ul>
                <li>
                    <div className='index'>
                        <p>1</p>
                    </div>
                    <div className='username'>
                        <p>Tanachot ketsomboon</p>
                    </div>
                    <div className='cPost'>
                        <p>1</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
