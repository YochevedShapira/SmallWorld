using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class ManageTraveler
    {


        public static Traveler GetTraveler(int id)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    Traveler traveler = entities.Travelers.First(t => t.TravelerID == id);
                    return traveler;
                }
            }
            catch { return null; }
        }




        public static Traveler SaveTraveler(User traveler)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {


                    entities.Users.Add(traveler);
                    entities.SaveChanges();
                    return traveler.Traveler;
                }

            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static bool DeleteTraveler(Traveler traveler)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    entities.Travelers.Remove(traveler);
                    entities.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        public static bool UpdateTraveler(Traveler traveler)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    Traveler tt = entities.Travelers.First(t => t == traveler);
                    tt = traveler;
                    entities.SaveChanges();

                }
                return true;
            }
            catch { return false; }
        }
    }



}

