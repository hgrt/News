using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RSSTry.Controllers
{
    public class newsController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "news Page";

            return View();
        }
    }
}
