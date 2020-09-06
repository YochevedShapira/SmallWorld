using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;

namespace SmallWorldWebApi.Controllers
{
  //  [RoutePrefix("User")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("POST")]
        public IHttpActionResult AddUser(UserDto userDto)
        {
            return Ok(userDto);
        }
        [HttpPut]
        [Route("PUT")]
        public IHttpActionResult UpdateUser(UserDto userDto)
        {
            return Ok(userDto);
        }
        [HttpPost]
        [Route("Login")]
        public IHttpActionResult Login([FromBody]UserDto us)
        {
           UserDto u= BL.ManageUser.Login(us);
            return Ok(u);
        }
        [HttpDelete]
        [Route("DELETE")]
        public IHttpActionResult DeleteUser()
        {
            return Ok(/*hostController*/);
        }

    }
}
