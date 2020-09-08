using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL
{
   public static class Match
    {
        public static List<SuggestionDto> GetMatchingSuggestions(RequestDto requestDto)
        {
          return  DAL.Match.GetMatchingSuggestions(requestDto).ConvertAll<SuggestionDto>(s =>
            { return Suggestion.ToDTO(s); });
        }
    }
}
