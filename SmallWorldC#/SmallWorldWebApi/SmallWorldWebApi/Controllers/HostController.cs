using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{
   // [RoutePrefix("Host")]
    public class HostController : ApiController
    {
        [HttpPost]
        [Route("Host")]
        public IHttpActionResult AddHost(HostDto hostDto)
        {

            if (BL.ManageUser.IsExists(hostDto.UserName))
                // return Request.CreateResponse(HttpStatusCode.NotFound, err);
                return BadRequest("user name is alredy exists");
            HostDto h =  BL.ManageHost.SaveHost(hostDto);
                if (h!=null)
                // return Ok(BL.ManageHost.GetHost(hostDto.UserID));
                return Ok(new UserDto() { UserID=h.HostID,UserName=h.UserName,UserPassword=h.HostPassword,UserStaus=Status.Host});
            return StatusCode(HttpStatusCode.InternalServerError);
        }
        [HttpPut]
        [Route("Host")]
        public IHttpActionResult UpdateHost(HostDto hostDto)
        {
            if (BL.ManageHost.UpdateHost(hostDto)!=null)
                //  return Ok(BL.ManageHost.GetHost(hostDto.UserID));
                return Ok(hostDto);
            return StatusCode(HttpStatusCode.InternalServerError);
        }
        [HttpGet]
        [Route("Host")]
        public IHttpActionResult GetHost(int id)
        {

          return Ok(BL.ManageHost.GetHost(id));
        }
        [HttpDelete]
        [Route("Host")]
        public IHttpActionResult DeleteHost(UserDto hostDto)
        {
            if (BL.ManageHost.DeleteHost(hostDto))
                // return Ok(BL.ManageHost.GetHost(hostDto.UserID));
                return Ok();
            return StatusCode(HttpStatusCode.InternalServerError);

        }

    }
}

