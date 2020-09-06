using System;
using System.Linq;
using DAL;
using DTO;

namespace BL
{
   static public class Address
    {
        public static AddressDto ToDTO(DAL.Address model)
        {
            return new AddressDto()
            {
                AddressId = model.AddressId, 
                country = model.country, 
                city = model.city, 
                street = model.street, 
               // LocationHosts = model.LocationHosts, 
               // Stops = model.Stops, 
            }; 
        }

        public static DAL.Address ToDAL(AddressDto addressDto)
        {
            return new DAL.Address()
            {
                AddressId = addressDto.AddressId, 
                country = addressDto.country, 
                city = addressDto.city, 
                street = addressDto.street, 
               // LocationHosts = LocationHosts, 
               // Stops = Stops, 
            }; 
        }

    //    public static 

    }
}