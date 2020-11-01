using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL
{
 public static   class ManageSuggestion
    {


        public static SuggestionDto GetSuggestion(int id)
        {
            return Suggestion.ToDTO(DAL.ManageSuggestion.GetSuggestion(id));
        }

        public static List< SuggestionDto> GetSuggestions(int id)
        {
            List<SuggestionDto> dto = new List<SuggestionDto>();
            foreach (var item in DAL.ManageSuggestion.GetSuggestions(id))
            {
                dto.Add(Suggestion.ToDTO(item));
            }
            return dto;
        }

        public static List<SuggestionDto> GetSuggestionsAll()
        {
            List<SuggestionDto> dto = new List<SuggestionDto>();
            foreach (var item in DAL.ManageSuggestion.GetSuggestionsAll())
            {
                dto.Add(Suggestion.ToDTO(item));
            }
            return dto;
        }


        public static SuggestionDto SaveSuggestion(SuggestionDto suggestionDto)
        {
            return Suggestion.ToDTO( DAL.ManageSuggestion.SaveSuggestion(Suggestion.ToDAL(suggestionDto)));
        }

        public static bool DeleteSuggestion(SuggestionDto suggestionDto)
        {
            return DAL.ManageSuggestion.DeleteSuggestion(Suggestion.ToDAL(suggestionDto));
        }

        public static SuggestionDto UpdateSuggestion(SuggestionDto suggestionDto)
        {
            return Suggestion.ToDTO( DAL.ManageSuggestion.UpdateSuggestion(Suggestion.ToDAL(suggestionDto)));
        }

    }
}
