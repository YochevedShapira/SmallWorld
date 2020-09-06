using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
 public static   class ManageSuggestion
    {
        public static Suggestion GetSuggestion(int id)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    Suggestion suggestion = entities.Suggestions.First(s => s.SuggestionID == id);
                    int trygit = 1;
                    return suggestion;
                }
            }
            catch { return null; }
        }




        public static Suggestion SaveSuggestion(Suggestion suggestion)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {


                    entities.Suggestions.Add(suggestion);
                    entities.SaveChanges();

                }
                return suggestion;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static bool DeleteSuggestion(Suggestion suggestion)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    entities.Suggestions.Remove(suggestion);
                    entities.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        public static Suggestion UpdateSuggestion(Suggestion suggestion)
        {
            try
            {
                Suggestion ss;
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                  ss  = entities.Suggestions.First(s => s == suggestion);
                    ss = suggestion;
                    entities.SaveChanges();


                }
                return ss;
            }
            catch { return null; }
        }
    }

}

