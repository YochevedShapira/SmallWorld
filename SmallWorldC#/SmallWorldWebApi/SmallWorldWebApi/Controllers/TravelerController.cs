using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{   [RoutePrefix("Traveler")]
    public class TravelerController : ApiController
    {
        [HttpPost]
        [Route("post")]
        public IHttpActionResult AddTraveler(TravelerDto travelerDto)
        {
          TravelerDto t=  BL.ManageTraveler.SaveTraveler(travelerDto);
            if (t != null)
                return Ok(new UserDto() { UserID=t.TravelerID,UserName=t.UserName,UserPassword=t.TravelerPassword,UserStaus=Status.Traveler});
            return StatusCode(HttpStatusCode.InternalServerError);

        }
        [HttpPut]
        [Route("PUT")]
        public IHttpActionResult UpdateTraveler(TravelerDto travelerDto)
        {
            BL.ManageTraveler.UpdateTraveler(travelerDto);
            return Ok(BL.ManageTraveler.GetTraveler(travelerDto.TravelerID));
        }
        [HttpGet]
        [Route("GET")]
        public IHttpActionResult GetTraveler(int id)
        {
            return Ok(BL.ManageTraveler.GetTraveler(id));
        }
        [HttpDelete]
        [Route("DELETE")]
        public IHttpActionResult DeleteTraveler(TravelerDto travelerDto)
        {
            BL.ManageTraveler.DeleteTraveler(travelerDto);
            return Ok(BL.ManageTraveler.GetTraveler(travelerDto.TravelerID));
        }


    }
}
