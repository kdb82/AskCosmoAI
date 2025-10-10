using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using api.Models;

namespace api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class HomeController : Controller
{
    [HttpGet]
    public IActionResult SayHello()
    {
        return Ok("Hello from server!");
    }
}
