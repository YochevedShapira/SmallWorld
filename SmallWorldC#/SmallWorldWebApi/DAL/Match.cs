using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using System
namespace DAL
{
    public static class Match
    {
        public List<Suggestion> GetMatchingSuggestions(RequestDto requestDto)
        {
            using (YMprojectEntities1 entities1 = new YMprojectEntities1())
            {
                entities1.Suggestions.Where(s => {

                    //if(s.HoursRange!=null&&requestDto.HoursRange!=null)
                    // {

                    // }
                    s.gender == requestDto.Gender;
                }
                    );
            }
        }
    }
}
