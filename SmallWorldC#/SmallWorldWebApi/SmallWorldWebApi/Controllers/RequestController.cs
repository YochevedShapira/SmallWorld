using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{
    public class RequestController : ApiController
    {
        [HttpPost]
        [Route("Request")]
        public List<SuggestionDto> GetSuggestions(RequestDto requestDto)
        {
        //    system.out.println("im here");
           // Debug.WriteLine("jj");
            ;
            requestDto.Traveler = BL.ManageTraveler.GetTraveler(requestDto.TravelerID);
          return BL.Match.GetMatchingSuggestions(requestDto);



        }
    }
}
