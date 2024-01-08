import '../App.css'; // 引入 CSS 模块
import Signin from '../components/user/Signin';

/**
 * todo:
 * 1、创建商品页面的的具体信息，
 * 分成三个部分： 
 *              1、top: 包含标题，排序、添加等
 *              2、main: 展示每个商品，创建相关组件，可先创建一个商品的上市栏，进行复用
 *              3、bottom: Pagination
 * 2、DetailedProduct：待定
 * 3、DetailedCart:待定
 * 4、权限问题
 */


function Content() {

    return (
        <div className='content' >
            {/* todo */}
            <Signin />
        </div>
    )
}

export default Content
