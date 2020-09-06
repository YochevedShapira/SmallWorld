using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{   [RoutePrefix("Adress")]
    public class AddressController : ApiController
    {


        [HttpPost]
        [Route("POST")]
        public IHttpActionResult AddAdress(AddressDto addressDto)
        {
            return Ok(addressDto);
        }
        [HttpPut]
        [Route("PUT")]
        public IHttpActionResult UpdateAdress(AddressDto addressDto)
        {
            return Ok(addressDto);
        }
        [HttpGet]
        [Route("GET")]
        public IHttpActionResult GetAdress()
        {
            return Ok(/*hostController*/);
        }
        [HttpDelete]
        [Route("DELETE")]
        public IHttpActionResult DeleteAdress(AddressDto addressDto)
        {
            return Ok(/*hostController*/);
        }
    }
}
