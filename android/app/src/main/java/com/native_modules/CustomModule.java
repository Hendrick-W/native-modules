package com.native_modules;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.os.Build;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    CustomModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hi from Android", Toast.LENGTH_LONG).show();
    }
    @ReactMethod
    public void getDeviceId(Promise promise){
        try{
            String android_id = Settings.Secure.getString(reactContext.getContentResolver(),
                    Settings.Secure.ANDROID_ID);
            promise.resolve(android_id);
        } catch(Exception e){
            promise.reject("Error", e);
        }
    }

    @ReactMethod
    public void getBatteryStatus(Callback successCallback){
        Intent batteryIntent = getCurrentActivity().registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
        int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);

        if(level == -1 || scale == -1){
            level = 0;
        }
//        System.out.print("battery level");
//        System.out.print(level);
        successCallback.invoke(null ,((float)level / (float)scale) * 100.0f);
    }
    //Get API Level
    @ReactMethod(isBlockingSynchronousMethod = true)
    public int getApiLevelSync() { return Build.VERSION.SDK_INT; }
    @ReactMethod
    public void getApiLevel(Promise p) { p.resolve(getApiLevelSync()); }

    //Get Based OS
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getBuildNumberSync() {
        return Build.VERSION.RELEASE;
    }
    @ReactMethod
    public void getBuildNumber(Promise p){p.resolve(getBuildNumberSync());}

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
