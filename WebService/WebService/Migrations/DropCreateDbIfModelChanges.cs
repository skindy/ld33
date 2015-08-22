using System;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Runtime.InteropServices;
using FFF.WebService.Models;


namespace FFF.WebService.Migrations
{
	internal sealed class DropCreateDbIfModelChanges : DropCreateDatabaseIfModelChanges<FFFWebServiceContext>
	{

		protected override void Seed(FFFWebServiceContext context)
		{
			base.Seed(context);
			Seeds.SeedPartSlots(context);
			Seeds.SeedParts(context);
			Seeds.SeedMonsters(context);
			Seeds.SeedInventories(context);
		}

	}
}