using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace DAL
{
    public static class Match
    {

        private static bool CalcRanges(int sugStart, int sugEnd , int reqStart, int reqEnd)
        {
            int sectionStart;
            int sectionEnd;
            int overlappingStart;
            int overlappingEnd;
            if (sugStart > reqStart)
            {

                sectionStart = reqStart;
                overlappingStart =sugStart;
            }
            else
            {
                sectionStart = sugStart;
                overlappingStart =reqStart;
            }

            if (sugEnd > reqEnd)
            {

                sectionEnd = sugEnd;
                overlappingEnd = reqEnd;
            }
            else
            {
                sectionEnd = reqEnd;
                overlappingEnd =sugEnd;
            }
            if ((double)(overlappingEnd - overlappingStart) / (double)(sectionEnd - sectionStart) < 0.5)
            {
                bool contained = (sugEnd == overlappingEnd && sugStart == overlappingStart) ||
                (reqEnd == overlappingEnd && reqStart == overlappingStart);
                            if (!contained)
                    return false;
            }
            return true;
        }
        public static bool Between(this DateTime input, DateTime date1, DateTime date2)
        {
            return (input > date1 && input < date2);
        }
        public static List<Suggestion> GetMatchingSuggestions(RequestDto requestDto)
        {
            using (YMprojectEntities1 entities1 = new YMprojectEntities1())
            {
               return entities1.Suggestions.Where(delegate (Suggestion s)
                {
                    foreach (var item in s.bookedDates)
                    {
                        if (item.dateEnd.Value.Between(requestDto.DateStart, requestDto.DateEnd)||
                        item.dateStart.Value.Between(requestDto.DateStart, requestDto.DateEnd))
                            return false;
                    }
                    if (s.Address.country != requestDto.Country)
                        return false;
                    if ((requestDto.City != null && requestDto.City != s.Address.city) || (requestDto.Street != null && requestDto.Street != s.Address.street))
                        return false;
                    if (requestDto.Gender != null && s.gender != null && requestDto.Gender != s.gender)
                        return false;
                    if (s.HoursRange != null && requestDto.HoursRange != null)
                    {
                        if (!CalcRanges(s.HoursRange.hours_start, s.HoursRange.hours_end, requestDto.HoursRange.StartHour, requestDto.HoursRange.MaxHour))
                            return false;
                    }
                    if (s.ageRange != null && requestDto.AgeRange != null)
                    {
                        if (!CalcRanges(s.ageRange.age_min, s.ageRange.age_max, requestDto.AgeRange.MinAge, requestDto.AgeRange.MaxAge))
                            return false;
                    }
                    return true;
                }).ToList();
            }
        }
    }
}
