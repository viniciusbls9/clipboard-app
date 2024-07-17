// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{SystemTray, Manager, SystemTrayEvent, SystemTrayMenu, CustomMenuItem, SystemTrayMenuItem, Window};
use tauri_plugin_positioner::{Position, WindowExt};

#[tauri::command]
fn close_window(window: Window) {
  window.hide().unwrap();
}

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let hide = CustomMenuItem::new("hide".to_string(), "Hide");
  let tray_menu = SystemTrayMenu::new()
    .add_item(quit)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(hide);
  
  let tray = SystemTray::new().with_menu(tray_menu);
  let tray_menu = SystemTrayMenu::new(); // insert the menu items here


  
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![close_window])
    .system_tray(SystemTray::new().with_menu(tray_menu).with_title("Clipboard app"))
    .plugin(tauri_plugin_positioner::init())
    .on_system_tray_event(|app, event| {
      tauri_plugin_positioner::on_tray_event(app, &event);
      
      
       match event {

      SystemTrayEvent::LeftClick {
        position: _,
        size: _,
        ..
      } => {
        println!("system tray received a left click");
        let window = app.get_window("main").unwrap();

        let _ = window.move_window(Position::TrayCenter);

        if window.is_visible().unwrap() {
          window.hide().unwrap();
        } else {
          window.show().unwrap();
          window.set_focus().unwrap();
        }
      }
      SystemTrayEvent::MenuItemClick { id, .. } => {
        match id.as_str() {
          "quit" => {
            std::process::exit(0);
          }
          "hide" => {
            let window = app.get_window("main").unwrap();
            window.hide().unwrap();
          }
          _ => {}
        }
      }
      _ => {}
    }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
