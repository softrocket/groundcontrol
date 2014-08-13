using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GroundControl.Web.Startup))]
namespace GroundControl.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
