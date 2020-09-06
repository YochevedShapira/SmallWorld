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
            foreach (var item in model.ServiceTypesToSuggestions)
            {
                vs.Add(item.ServiceTypeListID);
            }

            SuggestionDto suggestionDto= new SuggestionDto()
            {
                SuggestionID = model.SuggestionID,
                Description = model.SuggestionDescreotion,
                Gender = model.gender,
               
                Title = model.SuggestionTitle,
                ServicesType = vs,
                City = model.Address.city,
                Country = model.Address.country,
                Street = model.Address.street,
                HostId = model.hostId,


            };
            if (model.ageRange != null)
                suggestionDto.RangeAge = new SuggestionDto.AgeRange()
                {
                    MaxAge = model.ageRange.age_max,
                    MinAge = model.ageRange.age_min,

                };
            if (model.HoursRange != null)
                suggestionDto.RangeHours = new SuggestionDto.HoursRange()
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