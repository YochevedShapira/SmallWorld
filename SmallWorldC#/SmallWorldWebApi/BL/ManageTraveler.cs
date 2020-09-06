using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL
{
  public static  class ManageTraveler
    {
        
        
            public static TravelerDto GetTraveler(int id)
            {
               return Traveler.ToDTO(DAL.ManageTraveler.GetTraveler(id));
            }




            public static TravelerDto SaveTraveler(TravelerDto travelerDto)
            {
                  return Traveler.ToDTO( DAL.ManageTraveler.SaveTraveler(Traveler.ToUserDAL(travelerDto)));
            }

            public static bool DeleteTraveler(TravelerDto travelerDto)
            {
                return DAL.ManageTraveler.DeleteTraveler(Traveler.ToDAL(travelerDto));
            }

             public static bool UpdateTraveler(TravelerDto travelerDto)
             {
            return DAL.ManageTraveler.UpdateTraveler(Traveler.ToDAL(travelerDto));
        }
        }



    }

