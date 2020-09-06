using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{
    public class ServicesListController : ApiController
    {
        [HttpGet]
        [Route("ServicesList")]
        public IHttpActionResult Login()
        {
            List<ServiceTypeMapperDto> serviceTypeMapperDto = BL.ManageServicesList.GetServicesList();
            if(serviceTypeMapperDto!=null)
             return Ok(serviceTypeMapperDto);
            return InternalServerError();
        }
    }
}
