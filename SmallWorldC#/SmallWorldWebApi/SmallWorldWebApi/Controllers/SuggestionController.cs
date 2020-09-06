using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace SmallWorldWebApi.Controllers
{  // [RoutePrefix("Suggestion")]
    public class SuggestionController : ApiController
    {

        [HttpPost]
        [Route("Suggestion")]
        public IHttpActionResult AddSuggestion(SuggestionDto suggestionDto)
            {
            SuggestionDto s = BL.ManageSuggestion.SaveSuggestion(suggestionDto);
            if (s != null)
                return Created<SuggestionDto>("The content was successfully inserted into the database", s);
            return InternalServerError();
        }
        [HttpPut]
        [Route("Suggestion")]
        public IHttpActionResult UpdateSuggestion(SuggestionDto suggestionDto)
        {

            BL.ManageSuggestion.UpdateSuggestion(suggestionDto);
            return Ok(BL.ManageSuggestion.GetSuggestion(suggestionDto.SuggestionID));
        }
        [HttpGet]
        [Route("Suggestion/{id}")]
        public IHttpActionResult GetSuggestion([FromUri]int id)
        {
            return Ok(BL.ManageSuggestion.GetSuggestion(id));
        }
        [HttpDelete]
        [Route("Suggestion")]
        public IHttpActionResult DeleteSuggestion(SuggestionDto suggestionDto)
        {
            BL.ManageSuggestion.DeleteSuggestion(suggestionDto);
            return Ok(BL.ManageSuggestion.GetSuggestion(suggestionDto.SuggestionID));
        }
        //add new suggestation
        //country city street 
        //[דרישות]
        //dto object that contains all דרישות
        //save in db the place
        //save the דרישות


    }
}
