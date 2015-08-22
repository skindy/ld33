using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace FFF.WebService.Models
{
	public class Monster
	{
		#region Fields
		private int id;
		private string name;
		private int currentHealth;
		private int currentHunger;
		private IList<Inventory> inventory;
		#endregion


		#region Properties
		public int CurrentHealth
		{
			get { return this.currentHealth; }
			set { this.currentHealth = value; }
		}


		public int CurrentHunger
		{
			get { return this.currentHunger; }
			set { this.currentHunger = value; }
		}


		[Key]
		public int Id
		{
			get { return this.id; }
			set { this.id = value; }
		}


		[Index(IsUnique = true)]
		[StringLength(128)]
		[Required]
		public string Name
		{
			get { return this.name; }
			set { this.name = value; }
		}


		public IList<Inventory> Inventory
		{
			get { return this.inventory; }
			set { this.inventory = value; }
		}
		#endregion
	}
}