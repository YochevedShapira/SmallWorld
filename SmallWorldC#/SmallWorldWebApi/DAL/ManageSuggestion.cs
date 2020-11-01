using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class ManageSuggestion
    {
        public static YMprojectEntities1 entities = new YMprojectEntities1();
        public static Suggestion GetSuggestion(int id)
        {
            try
            {

                Suggestion suggestion = entities.Suggestions.First(s => s.SuggestionID == id);
                int trygit = 1;
                return suggestion;

            }
            catch { return null; }
        }

        public static List<Suggestion> GetSuggestions(int id)
        {
            try
            {

                List<Suggestion> suggestions = entities.Suggestions.Where(s => s.hostId == id).ToList();
                return suggestions;

            }
            catch { return null; }
        }

        public static List<Suggestion> GetSuggestionsAll()
        {
            try
            {

                List<Suggestion> suggestions = entities.Suggestions.ToList();
                return suggestions;

            }
            catch { return null; }
        }


        public static Suggestion SaveSuggestion(Suggestion suggestion)
        {
            try
            {
                entities.Suggestions.Add(suggestion);
                entities.SaveChanges();
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

                entities.Suggestions.Remove(suggestion);
                entities.SaveChanges();

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
                ss = entities.Suggestions.First(s => s.SuggestionID==suggestion.SuggestionID);
                ss = suggestion;
                entities.SaveChanges();
                return ss;
            }
            catch (Exception ex)
            { 
                return null;
            }
        }
    }

}

