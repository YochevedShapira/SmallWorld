using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{
    public class RequestController : ApiController
    {
        [HttpGet]
        [Route("Request")]
        public List<SuggestionDto> GetSuggestions(RequestDto requestDto)
        {
            requestDto.Traveler = BL.ManageTraveler.GetTraveler(requestDto.TravelerID);
            requestDto.Age = DateTime.Now.Year - requestDto.Traveler.BirthDate.Year;

        }
    }
}
