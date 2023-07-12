import React from 'react'
import EditIcon from '../img/icons8-edit.svg'
import DeleteIcon from '../img/icons8-delete-50.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        <div className="user">
          <img src='https://images.pexels.com/photos/3597031/pexels-photo-3597031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
          <div className="info">
            <span>John</span>
            <span>Posted 2 days ago</span>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={EditIcon} alt="" />
            </Link>
            <img src={DeleteIcon} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi, distinctio veritatis placeat blanditiis consectetur suscipit soluta quidem sequi qui nihil voluptates iusto aut aspernatur enim id ab aliquam corrupti libero dolore unde eum. Assumenda, qui ad! Dolor ducimus repellendus esse odit voluptatibus assumenda exercitationem debitis reprehenderit aspernatur amet aliquam, eligendi ea quidem placeat beatae expedita tenetur quibusdam? Velit corrupti voluptas natus ullam laboriosam debitis porro numquam dicta. Similique, nihil.</p>
        <p>Dignissimos facilis aut tenetur sequi fuga blanditiis molestias debitis quas. Ullam veritatis, facilis reprehenderit architecto molestiae a fugit maiores quas voluptates quod nesciunt quam rerum officiis ex corporis laudantium dolore vitae at suscipit repellendus in ea? Sit natus autem facilis libero. Similique in voluptatem tenetur totam adipisci earum, optio vel et sunt impedit eum excepturi pariatur libero reiciendis, corporis omnis eos quam ipsam aliquam rerum? Quasi iure assumenda ab impedit?</p>
        <p>At rem cum in officia iure quos ut doloribus quibusdam excepturi, sint velit facilis numquam nobis pariatur nemo. Iste doloremque neque magni molestias facere similique nemo, excepturi, inventore quas iure nisi in nihil quis ipsa atque necessitatibus culpa illo eaque quidem veritatis voluptas repudiandae praesentium? Iusto ipsum soluta laboriosam deleniti quod, repellat nostrum exercitationem nulla necessitatibus laborum sapiente reiciendis sunt molestias numquam quidem modi explicabo iure sint. Molestias, modi aspernatur.</p>
        <p>Minima quis non odit quisquam provident rerum quam maiores, totam, distinctio consequuntur eum incidunt error id dolores fuga aspernatur natus quae et vero harum asperiores eveniet! Maiores laudantium sint, tempore deleniti eligendi nostrum atque totam nam quae? Minus obcaecati est molestiae labore, quasi quod error asperiores animi fugiat amet aliquam ratione aspernatur, sint nam dolorem vel temporibus culpa vero impedit? Voluptatem fugiat suscipit, officia cumque blanditiis nihil! Architecto, asperiores quibusdam.</p>
      </div>

      <Menu />
    </div>

  )
}

export default Single