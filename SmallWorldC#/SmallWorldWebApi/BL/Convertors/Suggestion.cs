using System;
using System.Collections.Generic;
using DAL;
using DTO;

namespace BL
{
    static public class Suggestion
    {

        public static SuggestionDto ToDTO(DAL.Suggestion model)
        {
            List<int> vs = new List<int>();
            List<string> vss = new List<string>();
            if (model.ServiceTypesToSuggestions.Count > 0)
            {
                foreach (var item in model.ServiceTypesToSuggestions)
                {
                    vs.Add(item.ServiceTypeListID);
                }
            }
            if (model.ServiceTypesToSuggestions.Count > 0)
            {
                foreach (var item in model.ServiceTypesToSuggestions)
                {
                    vss.Add(item.ServiceTypeList.ServiceTypeName);
                }
            }

            SuggestionDto suggestionDto = new SuggestionDto()
            {
                SuggestionID = model.SuggestionID,
                Description = model.SuggestionDescreotion,
                Gender = model.gender,
                ServicesTypeName = vss,
                Title = model.SuggestionTitle,
                ServicesType = vs,
                City = model.Address.city,
                Country = model.Address.country,
                Street = model.Address.street,
                HostId = model.hostId,
                //boo

            };
            List<bookedDateDto> bookedDateDto = new List<bookedDateDto>();
            if (model.bookedDates != null && model.bookedDates.Count > 0)
            {
               
                foreach (var item in model.bookedDates)
                {
                    bookedDateDto.Add(new DTO.bookedDateDto()
                    {
                        dateEnd = item.dateEnd.Value,
                        dateStart = item.dateStart.Value
                    });
                }
            }
            suggestionDto.bookedDates = bookedDateDto;
            if (model.ageRange != null)
                suggestionDto.RangeAge = new AgeRange()
                {
                    MaxAge = model.ageRange.age_max,
                    MinAge = model.ageRange.age_min,

                };
            if (model.HoursRange != null)
                suggestionDto.RangeHours = new DTO.HoursRange()
                {
                    MaxHour = model.HoursRange.hours_end,
                    StartHour = model.HoursRange.hours_start
                };
            return suggestionDto;
        }

        public static DAL.Suggestion ToDAL(SuggestionDto suggestionDto)
        {
            DAL.Suggestion suggestion = new DAL.Suggestion()
            {
                SuggestionID = suggestionDto.SuggestionID,
                SuggestionDescreotion = suggestionDto.Description,
                SuggestionTitle = suggestionDto.Title,

                Address = new DAL.Address()
                {
                    city = suggestionDto.City,
                    country = suggestionDto.Country,
                    street = suggestionDto.Street,
                },

                gender = suggestionDto.Gender,
                hostId = suggestionDto.HostId,


            };
            suggestion.ServiceTypesToSuggestions = suggestionDto.ServicesType.ConvertAll<DAL.ServiceTypesToSuggestion>(s =>
             {
                 return new ServiceTypesToSuggestion()
                 {
                     ServiceTypeListID = s,
                 };
             });
            if (suggestionDto.RangeHours != null)
                suggestion.HoursRange = new DAL.HoursRange()
                {
                    hours_end = suggestionDto.RangeHours.MaxHour,
                    hours_start = suggestionDto.RangeHours.StartHour
                };
            if (suggestionDto.RangeAge != null)
                suggestion.ageRange = new DAL.ageRange()
                {
                    age_max = suggestionDto.RangeAge.MaxAge,
                    age_min = suggestionDto.RangeAge.MinAge,
                };
            return suggestion;
        }
    }
}