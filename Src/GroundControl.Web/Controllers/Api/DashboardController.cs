using System.Collections.Generic;
using System.Web.Http;
using GroundControl.Shared.DTO;

namespace GroundControl.Web.Controllers.Api
{
    public class DashboardController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<DashboardItemDTO> Get()
        {
            return new []
                   {
                        new DashboardItemDTO{ Title = "New pages", Contents = "Lorem ipsum" },
                        new DashboardItemDTO{ Title = "Latest comments", Contents = "Lorem ipsum" }  
                   };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}