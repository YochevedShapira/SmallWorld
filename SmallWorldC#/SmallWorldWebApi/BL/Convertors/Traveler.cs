using System;
using System.Linq;
using DAL;
using DTO;

namespace BL
{
   static public class Traveler
    {

        public static TravelerDto ToDTO(DAL.Traveler model)
        {
            if (model is null)
                return null;
            return new TravelerDto()
            {
                TravelerID = model.TravelerID,
                TravelerName = model.TravelerName,
                BirthDate = model.BirthDate,
                gender = model.gender,
                UserName=model.TravelerName,
                TravelerPassword=model.User.UserPassword
               
            };
       
        }
        public static DAL.Traveler ToDAL(TravelerDto travelerDto)
        {
            if (travelerDto is null)
                return null;
            return new DAL.Traveler()
            {
                BirthDate=travelerDto.BirthDate,
                gender=travelerDto.gender,
                TravelerName=travelerDto.TravelerName,
                TravelerID=travelerDto.TravelerID,
                
            };
        }

        public static DAL.User ToUserDAL(TravelerDto travelerDto)
        {
            if (travelerDto is null)
                return null;
            return new DAL.User()
            {
                UserPassword = travelerDto.TravelerPassword,
                UserName = travelerDto.TravelerName,
                //UserId = hostDto.UserID,
                Traveler = new DAL.Traveler()
                {
                    BirthDate = travelerDto.BirthDate,
                   
                    gender = travelerDto.gender,
                    TravelerID = travelerDto.TravelerID,
                    TravelerName = travelerDto.TravelerName,
                     
                }
            };
        }

    }
}