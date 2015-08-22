using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using FFF.WebService.Models;


namespace FFF.WebService.Migrations
{
	public static class Seeds
	{

		public static void SeedParts(FFFWebServiceContext context)
		{
			context.Parts.AddOrUpdate(part => part.Id,
				new Part()
				{
					Name = "Human Body",
					Species = "Human",
					SlotId = PartSlot.Body
				},
				new Part()
				{
					Name = "Human Head",
					Species = "Human",
					SlotId = PartSlot.Head
				},
				new Part()
				{
					Name = "Human Left Arm",
					Species = "Human",
					SlotId = PartSlot.LeftArm
				},
				new Part()
				{
					Name = "Human Right Arm",
					Species = "Human",
					SlotId = PartSlot.RightArm
				},
				new Part()
				{
					Name = "Human Left Leg",
					Species = "Human",
					SlotId = PartSlot.LeftLeg
				},
				new Part()
				{
					Name = "Human Right Leg",
					Species = "Human",
					SlotId = PartSlot.RightLeg
				},
				new Part()
				{
					Name = "Human Tail",
					Species = "Human",
					SlotId = PartSlot.Tail
				});
			
			context.SaveChanges();
		}


		public static void SeedPartSlots(FFFWebServiceContext context)
		{
			context.PartSlots.AddOrUpdate(slot => slot.Id,
				new PartSlot() {Name = "Body"},
				new PartSlot() {Name = "Head"},
				new PartSlot() {Name = "LeftArm"},
				new PartSlot() {Name = "RightArm"},
				new PartSlot() {Name = "LeftLeg"},
				new PartSlot() {Name = "RightLeg"},
				new PartSlot() {Name = "Tail"}
				);

			context.SaveChanges();
		}


		public static void SeedMonsters(FFFWebServiceContext context)
		{
			context.Monsters.AddOrUpdate(monster => monster.Id,
				new Monster()
				{
					Name = "Doug"
				});

			context.SaveChanges();
		}


		public static void SeedInventories(FFFWebServiceContext context)
		{
			context.Inventories.AddOrUpdate(inventory => inventory.Id,
				new Inventory()
				{
					MonsterId = 1,
					PartId = 1,
					Equipped = true
				},
				new Inventory()
				{
					MonsterId = 1,
					PartId = 2,
					Equipped = true
				},
				new Inventory()
				{
					MonsterId = 1,
					PartId = 3,
					Equipped = true
				},
				new Inventory()
				{
					MonsterId = 1,
					PartId = 4,
					Equipped = true
				},
				new Inventory()
				{
					MonsterId = 1,
					PartId = 5,
					Equipped = true
				},
				new Inventory()
				{
					MonsterId = 1,
					PartId = 6,
					Equipped = true
				});

			context.SaveChanges();
		}

	}
}