using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using GroundControl.Web.App_Start;

namespace GroundControl.Web
{
    public class WikiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutofacIntegration.RegisterAutofac();
            AutoMapperIntegration.RegisterAutoMapper();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
