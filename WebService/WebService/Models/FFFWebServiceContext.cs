using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using FFF.WebService.Migrations;


namespace FFF.WebService.Models
{
	[DbConfigurationType(typeof (MySql.Data.Entity.MySqlEFConfiguration))] public class FFFWebServiceContext : DbContext
	{
		#region Constructors
		public FFFWebServiceContext()
			: this(DBCreationMethod.CreateIfNotExists) {}


		public FFFWebServiceContext(DBCreationMethod creationMethod = DBCreationMethod.CreateIfNotExists)
			: base("name=FFFConnectionString")
		{
			switch (creationMethod)
			{
				case DBCreationMethod.CreateIfNotExists:
					Database.SetInitializer(new CreateDbIfNotExists());
					break;
				case DBCreationMethod.DropCreateIfModelChanges:
					Database.SetInitializer(new DropCreateDbIfModelChanges());
					break;
				case DBCreationMethod.DropCreateAlways:
					Database.SetInitializer(new DropCreateDbAlways());
					break;
			}
		}
		#endregion


		#region Enums
		public enum DBCreationMethod
		{

			CreateIfNotExists,
			DropCreateIfModelChanges,
			DropCreateAlways

		}
		#endregion


		#region Properties
		public DbSet<Inventory> Inventories { get; set; }
		public DbSet<Monster> Monsters { get; set; }
		public DbSet<Part> Parts { get; set; }
		public DbSet<PartSlot> PartSlots { get; set; }
		#endregion
	}
}