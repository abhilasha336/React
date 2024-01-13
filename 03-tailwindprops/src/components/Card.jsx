import React from 'react'

/*function Card(props) {
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
       {props.username}
      </div>
      <div>
        {props.post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card*/


function Card(  //this is a function
    {username="HC",
     post="Associate",
     srcValue="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     myArr  //destructure it
    }) {
       //destructing by props using {}   here is the default value this will be taken ,if we not specify in app.jsx </card> properties
       return (
      <div>
          <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src={srcValue} alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
         Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div>
         {username}
        </div>
        <div>
          {post} {myArr}
        
        </div>
      </figcaption>
    </div>
  </figure>
      </div>
    )
  }
  
  export default Card