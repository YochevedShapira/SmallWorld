using System;
using System.Linq;
using DAL;
using DTO;

namespace BL
{
    static public class Host
    {

        public static HostDto ToDTO(DAL.Host model)
        {
            if (model is null)
                return null;
            return new HostDto()
            {
                HostID = model.HostID,
                HostName = model.HostName,
                BirthDate = model.BirthDate,
                gender = model.gender,
                HostEmail = model.HostEmail,
                HostTel = model.HostTel,
                HostTextDetails = model.HostTextDetails,
                HostPassword=model.User.UserPassword,
                UserName=model.User.UserName,
                //UserID=model.User.UserId,
                // UserName=model.User.UserName,
                // UserPassword=model.User.UserPassword
                //UserDto = BL.User.ToDTO(model.User)


            };
        }

        public static DAL.Host ToDAL(HostDto hostDto)
        {
            if (hostDto is null)
                return null;
            return new DAL.Host()
            {
                BirthDate=hostDto.BirthDate,
                HostTextDetails=hostDto.HostTextDetails,
                HostID=hostDto.HostID,
                gender=hostDto.gender,
                 HostEmail=hostDto.HostEmail,
                 HostName=hostDto.HostName,
                 HostTel=hostDto.HostTel,
                 //User= new DAL.User() 
                 //{
                 //    UserId=hostDto.UserID,
                 //    UserName=hostDto.UserName,
                 //    UserPassword=hostDto.UserPassword
                 //}
                 // User=User.ToDAL(hostDto.UserDto)
                // LocationHosts=hostDto.
            };
        }

        public static DAL.User ToUserDAL(HostDto hostDto)
        {
            if (hostDto is null)
                return null;
            return new DAL.User()
            {
                UserPassword = hostDto.HostPassword,
                UserName = hostDto.UserName,
                //UserId = hostDto.UserID,
                Host = new DAL.Host()
                {
                    BirthDate = hostDto.BirthDate,
                    HostTextDetails = hostDto.HostTextDetails,
                    HostTel = hostDto.HostTel,
                    gender = hostDto.gender,
                    HostEmail = hostDto.HostEmail,
                    HostID = hostDto.HostID,
                    HostName = hostDto.HostName,

                }
            };
        }
    }
}