using System.Web.Mvc;

namespace GroundControl.Web.Controllers
{
    public class TemplatesController : Controller
    {
        [HttpGet]
        public PartialViewResult Index()
        {
            return this.PartialView("_WikiPage");
        }

        [HttpGet]
        public PartialViewResult Modals(string key)
        {
            return this.PartialView("_NewPage");
        }
    }
}