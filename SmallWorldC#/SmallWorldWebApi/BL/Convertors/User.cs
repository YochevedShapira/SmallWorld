using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
  public static  class User
    {
        public static UserDto ToDTO(DAL.User model)
        {
            if (model is null)
                return null;
            return new UserDto()
            {
               UserID=model.UserId,
               UserName=model.UserName,
               UserPassword=model.UserPassword,
             //  HostDto=Host.ToDTO(model.Host),
//TravelerDto=Traveler.ToDTO(model.Traveler)

            };
        }

        public static DAL.User ToDAL(UserDto userDto)
        {
            return new DAL.User()
            {
               UserPassword=userDto.UserPassword,
               UserName=userDto.UserName,
               UserId=userDto.UserID,
             //   Host=Host.ToDAL(userDto.HostDto),
               // Traveler=Traveler.ToDAL(userDto.TravelerDto),
                
               
            };
        }
    }
}
